from django.db import models


class Notes(models.Model):
    heading = models.CharField(max_length=100, blank=True, default="")
    content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["date_created"]

    def __str__(self):
        return self.heading