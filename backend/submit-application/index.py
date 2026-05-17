import os
import json
import urllib.request
import urllib.parse
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def send_telegram(token: str, chat_id: str, text: str):
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    data = json.dumps({"chat_id": chat_id, "text": text, "parse_mode": "HTML"}).encode()
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
    urllib.request.urlopen(req, timeout=10)


def send_email(to_email: str, subject: str, body: str):
    smtp_host = os.environ.get("SMTP_HOST", "smtp.gmail.com")
    smtp_port = int(os.environ.get("SMTP_PORT", "587"))
    smtp_user = os.environ.get("SMTP_USER", "")
    smtp_pass = os.environ.get("SMTP_PASS", "")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = smtp_user
    msg["To"] = to_email
    msg.attach(MIMEText(body, "html", "utf-8"))

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.sendmail(smtp_user, to_email, msg.as_string())


def handler(event: dict, context) -> dict:
    """Приём заявки на собеседование и отправка в Telegram и на email."""
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    if event.get("httpMethod") != "POST":
        return {"statusCode": 405, "headers": headers, "body": {"error": "Method not allowed"}}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    age = body.get("age", "").strip()
    date = body.get("date", "").strip()
    time = body.get("time", "").strip()

    if not name or not phone:
        return {"statusCode": 400, "headers": headers, "body": {"error": "Имя и телефон обязательны"}}

    tg_text = (
        f"📋 <b>Новая заявка на собеседование</b>\n\n"
        f"👤 <b>Имя:</b> {name}\n"
        f"📞 <b>Телефон:</b> {phone}\n"
        f"🎂 <b>Возраст:</b> {age or '—'}\n"
        f"📅 <b>Дата:</b> {date or '—'}\n"
        f"🕐 <b>Время:</b> {time or '—'}"
    )

    email_body = f"""
    <html><body style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #0d1b2a;">Новая заявка на собеседование</h2>
    <table style="border-collapse: collapse; width: 100%;">
      <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Имя</td><td style="padding: 8px; border: 1px solid #ddd;">{name}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Телефон</td><td style="padding: 8px; border: 1px solid #ddd;">{phone}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Возраст</td><td style="padding: 8px; border: 1px solid #ddd;">{age or '—'}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Дата собеседования</td><td style="padding: 8px; border: 1px solid #ddd;">{date or '—'}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Время</td><td style="padding: 8px; border: 1px solid #ddd;">{time or '—'}</td></tr>
    </table>
    </body></html>
    """

    errors = []

    tg_token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    tg_chat_id = os.environ.get("TELEGRAM_CHAT_ID", "")
    print(f"TG token present: {bool(tg_token)}, chat_id present: {bool(tg_chat_id)}, chat_id value: {tg_chat_id}")
    if tg_token and tg_chat_id:
        try:
            send_telegram(tg_token, tg_chat_id, tg_text)
            print("Telegram sent OK")
        except Exception as e:
            print(f"Telegram error: {e}")
            errors.append(f"telegram: {e}")

    email_to = os.environ.get("EMAIL_TO", "")
    smtp_user = os.environ.get("SMTP_USER", "")
    smtp_pass = os.environ.get("SMTP_PASS", "")
    if email_to and smtp_user and smtp_pass:
        try:
            send_email(email_to, f"Заявка: {name} — {phone}", email_body)
        except Exception as e:
            errors.append(f"email: {e}")

    return {
        "statusCode": 200,
        "headers": headers,
        "body": {"ok": True, "errors": errors},
    }