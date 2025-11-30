from rest_framework import serializers
from .models import Product
from django.utils.text import slugify

class ProductSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Product
        fields = [
            "id",
            "manufacturer",
            "model",
            "slug",
            "description",
            "price",
            "in_stock",
            "image",
        ]
        read_only_fields = ["slug", "in_stock"]

    def create(self, validated_data):
        manufacturer = validated_data.get("manufacturer")
        model_name = validated_data.get("model")
        validated_data["slug"] = slugify(f"{manufacturer}-{model_name}")
        return super().create(validated_data)
