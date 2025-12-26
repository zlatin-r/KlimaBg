# views.py
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail

@api_view(["POST"])
def contact_api(request):
    data = request.data
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not all([name, email, message]):
        return Response({"error": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST)

    # send email
    send_mail(
        f"Contact Form from {name}, {email}",
        message,
        email,
        [settings.CONTACT_EMAIL],
        fail_silently=False,
    )
    return Response({"success": "Message sent successfully!"}, status=status.HTTP_200_OK)
