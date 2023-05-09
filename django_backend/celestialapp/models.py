from django.db import models


class Snippet(models.Model):
    title = models.CharField(max_length=100, blank=True, default="")
    code = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    language = models.CharField(max_length=100)

    class Meta:
        ordering = ["date_created"]

    def __str__(self):
        return self.title