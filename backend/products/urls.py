from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import product_list, product_detail, ProductViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('products/', product_list, name='product-list'),
    path('products/<int:pk>/', product_detail, name='product-detail'),
]
