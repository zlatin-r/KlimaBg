from django.http import HttpResponse
from rest_framework import generics
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


def home(request):
    return HttpResponse("Добре дошли в KlimaBG!")


# List all categories
class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


# List all products
class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


# Retrieve a single product
class ProductDetailAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
