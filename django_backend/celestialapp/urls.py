from django.urls import path
from celestialapp import views

urlpatterns = [
    path("snippets/", views.ListSnippetAPIView.as_view(), name="snippet_list"),
    path("snippets/create/", views.CreateSnippetAPIView.as_view(), name="snippet_create"),
    path("snippets/update/<int:pk>/", views.UpdateSnippetAPIView.as_view(), name="update_snippet"),
    path("snippets/delete/<int:pk>/", views.DeleteSnippetAPIView.as_view(), name="delete_snippet")
]
