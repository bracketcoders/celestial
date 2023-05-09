# snippets/serializers
from rest_framework import serializers
from celestialapp.models import Snippet

class SnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Snippet
        fields = "__all__"