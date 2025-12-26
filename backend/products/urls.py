from django.urls import path
from .views import ProductCreate, ProductList

urlpatterns = [
    path('', ProductList.as_view(), name='product-list'),
    path("create/", ProductCreate.as_view(), name="product-create"),
]
