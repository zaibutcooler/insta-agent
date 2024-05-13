
from instapy import InstaPy


# Set the recipient's username (the person you want to send a DM to)
recipient_username = "recipient_username"

# Set the message you want to send
message = "Hello from Instapy!"

# Create an Instapy session



class Workflow:
    def __init__(self,username,password) -> None:
        self.agents = []
        self.tasks = []
        self.username = []
        self.password = []
        self.interest = []
        self.session = InstaPy(username=username,password=password)

        
    def add_agent(self,agent=None):
        pass
    
    def add_task(self):
        pass
    
    def login(self):
        self.session.login()
    
    def bang(self):
        pass
    
    def dummy(self):
        self.session.send_message('zaibutcooler', message)

            
    
    