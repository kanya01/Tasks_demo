import eel

eel.innit('web')

@eel.expose
def get_data():
    return 'got data from py'

@eel.expose
def send_data(msg):
    print (msg)

eel.start('index.html')
