# snippets/serializers
from rest_framework import serializers
from celestialapp.models import Notes

class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = "__all__"