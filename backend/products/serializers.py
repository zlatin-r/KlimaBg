from rest_framework import serializers
from .models import Category, Product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()

    class Meta:
        model = Product
        fields = [
            'id', 'name', 'brand', 'description', 'price',
            'btu_cooling', 'btu_heating', 'in_stock', 'image', 'category'
        ]
