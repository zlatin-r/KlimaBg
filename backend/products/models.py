from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    brand = models.CharField(max_length=50)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    in_stock = models.BooleanField(default=True)
    image = models.ImageField(upload_to='products/')
    category = models.CharField(max_length=50)

    def __str__(self):
        return self.name
