from celestialapp.models import Snippet
from django.shortcuts import HttpResponse
from django.http import JsonResponse
from celestialapp.serializers import SnippetSerializer
from django.core import serializers


def home(request):
    return HttpResponse("Status OK")


def getSnippets(request):
    snippets = Snippet.objects.all()
    data = serializers.serialize("json", snippets)
    print(data)

    return JsonResponse(data, safe=False)

