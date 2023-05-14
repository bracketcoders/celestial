from rest_framework.generics import ListAPIView
from rest_framework.generics import CreateAPIView
from rest_framework.generics import DestroyAPIView
from rest_framework.generics import UpdateAPIView
from celestialapp.serializers import NotesSerializer
from celestialapp.models import Notes


# Create your views here.
class ListNotesAPIView(ListAPIView):
    """This endpoint list all of the available Notes from the database"""
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer


class CreateNotesAPIView(CreateAPIView):
    """This endpoint allows for creation of a Notes"""
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer


class UpdateNotesAPIView(UpdateAPIView):
    """This endpoint allows for updating a specific Notes by passing in the id of the Notes to update"""
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer


class DeleteNotesAPIView(DestroyAPIView):
    """This endpoint allows for deletion of a specific Notes from the database"""
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer
