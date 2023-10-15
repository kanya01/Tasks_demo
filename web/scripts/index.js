async function getDataFromPython(){
    document.getElementById('myele').innerText = await eel.get_data()();
}
async function getTasks() {
    const tasks = await eel.get_tasks()()
    const divTasks = document.getElementById('tasks')
}

document.getELementById('mybtn').addEventListener('click', async() => {
    await eel.add(document.getElementById('taskinp').value)
    getTasks()
})

document.getElementById('sendbtn').addEventListener('click', async() => {
    await eel.add(document.getElementById('taskinp').value)
    getTasks()
})
