from fastapi import FastAPI

app = FastAPI()

@app.get("/status")
def get_status():
    """Get status of messaging server."""
    return ({"status":  "running"})