## Table of Contents

- [Django CLI Commands](#django-cli-commands)
- [Django Model Layer](#django-model-layer)
- [Django View Layer](#django-view-layer)
- [Django Template Layer](#django-template-layer)

# Django Cheatsheet

Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design that follows the model–template–views architectural pattern (MVT).


## Django CLI Commands


| Command                                            | Description                                                                                                                                              |
|----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| django-admin startproject project-name             | To create a new project                                                                                                                                  |
| django-admin startapp app-name                     | To create a new app                                                                                                                                      |
| python manage.py makemigrations                    | To update changes to models                                                                                                                              |
| python manage.py migrate                           | To store migrations                                                                                                                                      |
| python manage.py runserver [addrport]              | To run server                                                                                                                                            |
| python manage.py shell                             | To invoke the Python shell                                                                                                                               |
| python manage.py createsuperuser                   | To create a superuser                                                                                                                                    |
| python manage.py test                              | To run tests                                                                                                                                             |
| python manage.py flush                             | To removes all data from the database and re-executes any post-synchronization handlers                                                                  |
| python manage.py collectstatic                     | To collect staticfiles into a separate folder                                                                                                            |
| python manage.py changepassword <username>         | To change username's password                                                                                                                            |
| python manage.py help                              | To list all the custom or existing command of all installed apps                                                                                         |
| python manage.py dbshell                           | To run SQL queries                                                                                                                                       |
| python manage.py sendtestemail [email [email ...]] | To send a test email (to confirm email sending through Django is working) to the recipient(s) specified                                                  |
| python manage.py inspectdb [table [table ...]]     | To introspect the database tables in the database pointed-to by the NAME setting and outputs a Django model module (a models.py file) to standard output |
| python manage.py createcachetable                  | To Creates the cache tables for use with the database cache backend using the information from your settings file                                        |                                                                                                                                                     
**[🔼Back to Top](#table-of-contents)**


## Django Model Layer

| Code                             | Description                                                                                                                                 |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| from django.db import models     | Imports the models module, which contains models.Model class                                                                                |
| models.Model                     | The base class for django models                                                                                                            |
| models.ForeignKey()              | To define a many-to-one relationship                                                                                                        |
| models.ManyToMany()              | To define a many-to-many relationship                                                                                                       |
| models.OneToOneField()           | To define an extension of a model                                                                                                           |
| on_delete=models.CASCADE         | Cascade deletes. Django emulates the behavior of the SQL constraint ON DELETE CASCADE and also deletes the object containing the ForeignKey |
| on_delete=models.PROTECT         | Prevent deletion of the referenced object by raising ProtectedError, a subclass of django.db.IntegrityError                                 |
| on_delete=models.RESTRICT        | Prevent deletion of the referenced object by raising RestrictedError (a subclass of django.db.IntegrityError)                               |
| on_delete=models.SET_NULL        | Set the ForeignKey null; this is only possible if null is True                                                                              |
| on_delete=models.SET_DEFAULT     | Set the ForeignKey to its default value; a default for the ForeignKey must be set                                                           |
| on_delete=models.SET()           | Set the ForeignKey to the value passed to SET(), or if a callable is passed in, the result of calling it                                    |
| object = Object.objects.create() | To create an instance of the model                                                                                                          |
| object.save()                    | To save the object in db                                                                                                                    |
| object.update()                  | To update changes of the object in db                                                                                                       |
| object.delete()                  | To delete the object from db                                                                                                                |
| query = Object.objects.get()     | To query the model                                                                                                                          |
**[🔼Back to Top](#table-of-contents)**

## Django View Layer


| Code                                                           | Description                                                                                                                                           |
|----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| from django.urls import path                                   | URL conf                                                                                                                                              |
| urlpatterns = [path('blog/', views.page)]                      | Map functions to urls                                                                                                                                 |
| from django.urls import include                                | Include other URLconf modules                                                                                                                         |
| urlpatterns = [path('community/', include('aggregator.urls'))] | Exemple of include usage                                                                                                                              |
| render()                                                       | django.shortcuts: render(request, template_name, context=None, content_type=None, status=None, using=None)                                            |
| redirect()                                                     | django.shortcuts: redirect(to, *args, permanent=False, **kwargs)                                                                                      |
| get_object_or_404()                                            | django.shortcuts: Calls get() on a given model manager, but it raises Http404 instead of the model’s DoesNotExist exception                           |
| get_list_or_404()                                              | django.shortcuts: Returns the result of filter() on a given model manager cast to a list, raising Http404 if the resulting list is empty              |
| HttpResponse(html)                                             | from django.http import HttpResponse                                                                                                                  |
| HttpResponseNotFound(html)                                     | django.http.Http404                                                                                                                                   |
| JsonResponse()                                                 | django.http: An HttpResponse subclass that helps to create a JSON-encoded response. It inherits most behavior from its superclass with a couple differences |
| StreamingHttpResponse()                                        | django.http: stream chunks of data. Useful for generating large csv files                                                                             |
| FileResponse()                                                 | django.http: FileResponse is a subclass of StreamingHttpResponse optimized for binary files                                                           |
**[🔼Back to Top](#table-of-contents)**

## Django Template Layer

**Variables**

Variables are surrounded by {{ and }}:
````markdown
<p>User name is {{ user_name }}. User age is {{ user_age }}.</p>
````

<br>

**Tags**
Tags provide arbitrary logic in the rendering process
Tags are surrounded by {% and %}:
````markdown
{% if condition %}
    <p>hello</p>
{% endif %}
````

<br>

**Filters**

Filters transform the values of variables and tag arguments:

Add 3 to the value of an integer:
````markdown
{{ int_value | "add: 3" }}
````

<br>

Capitalize the first letter of the string:
````markdown
{{ text_value | capfirst }}
````

<br>

Format a date:
````markdown
{{ date_value | date:"D d M Y" }}
````

<br>

**Comments**

Comments are surrounded by {# and #}
````markdown
{# This is a comment #}
````

A {% comment %} tag provides multi-line comments.
````markdown
{% comment %}
    Comment 1
    Comment 2
    Comment 3
{% endcomment %}
````
**[🔼Back to Top](#table-of-contents)**
