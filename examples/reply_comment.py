from instagent import Workflow
from instagent.agents import reply_agent
from instagent.tasks import reply_comments
from dotenv import load_dotenv
from dotenv import dotenv_values

load_dotenv()

config = dotenv_values(".env")

if __name__ == "__main__":
    print(config['STUPID'])

    workflow = Workflow()
    
    username,password = config['USERNAME'],config['PASSWORD']

    workflow.login(username,password)
    
    workflow.add_agent(reply_agent)

    workflow.add_task(reply_comments)

    workflow.bang()