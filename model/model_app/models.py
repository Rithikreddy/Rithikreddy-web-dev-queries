from django.db import models

class user(models.Model):
    first_name = models.CharField(max_length=128)
    last_name  = models.CharField(max_length=128)
    #Unique is used to make it as a primary key
    #Here the below used function is EmailField and not Email
    email = models.EmailField(max_length=256,unique='true')

# Create your models here.
