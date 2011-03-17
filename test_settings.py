from settings import *
#from dev_settings import *

ROOT_URLCONF = 'urls'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': rel('mirosubs.sqlite3'), 
    }
}

CELERY_ALWAYS_EAGER = True

INSTALLED_APPS += ('django_nose', )
INSTALLED_APPS = list(INSTALLED_APPS)
INSTALLED_APPS.remove('mirosubs')
TEST_RUNNER = 'django_nose.NoseTestSuiteRunner'

SITE_ID = 4
SITE_NAME = 'mirosubs-dev'

TWITTER_CONSUMER_KEY = '6lHYqtxzQBD3lQ55Chi6Zg'
TWITTER_CONSUMER_SECRET = 'ApkJPIIbBKp3Wph0JBoAg2Nsk1Z5EG6PFTevNpd5Y00'

VIMEO_API_KEY = 'e1a46f832f8dfa99652781ee0b39df12'
VIMEO_API_SECRET = 'bdaeb531298eeee1'