from rest_framework.generics import ListAPIView
from rest_framework.generics import CreateAPIView
from rest_framework.generics import DestroyAPIView
from rest_framework.generics import UpdateAPIView
from celestialapp.serializers import SnippetSerializer
from celestialapp.models import Snippet


# Create your views here.
class ListSnippetAPIView(ListAPIView):
    """This endpoint list all of the available Snippets from the database"""
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer


class CreateSnippetAPIView(CreateAPIView):
    """This endpoint allows for creation of a Snippet"""
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer


class UpdateSnippetAPIView(UpdateAPIView):
    """This endpoint allows for updating a specific Snippet by passing in the id of the Snippet to update"""
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer


class DeleteSnippetAPIView(DestroyAPIView):
    """This endpoint allows for deletion of a specific Snippet from the database"""
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer
