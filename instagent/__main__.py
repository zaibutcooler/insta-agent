from dotenv import load_dotenv
from dotenv import dotenv_values

load_dotenv()

config = dotenv_values(".env")

if __name__ == "__main__":
    print(config['STUPID'])
    
    