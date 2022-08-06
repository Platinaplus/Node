const Todo = require('../models/todo')
const users = [
    { name: 'Igor', age: 23, email: 'mail@mail.ru' },
    { name: 'Elena', age: 24, email: 'mail53@mail.ru' }
]

module.exports = {
    test() {
        return {
            count: Math.trunc(Math.random() * 10),
            users
        }
    },
    random({ min, max, count }) {
        const arr = []
        for (let i = min; i < count; i++) {
            const random = Math.random() * (max - min) + min
            arr.push(random)
        }
        return arr
    },
    addTestUser({ user: { name, email } }) {
        const user = {
            name, email,
            age: Math.floor(Math.random() * 30)
        }
        users.push(user)
        return user
    },
    async getTodos() {
        try {
            return await Todo.findAll()
        } catch (e) {
            throw new Error('Could not fetch Todos')
        }
    },
    async createTodo({ todo: {title} }) {
        try {
            return await Todo.create({
                title,
                done: false
            })
        } catch (e) {
            throw new Error('Title is required')
        }
    },
    async completeTodo({id}) {
        try {
            const todo = await Todo.findByPk(id)
            todo.done = true
            await todo.save()
            return todo
        } catch (e) {
            throw new Error('Could not complete task')
        }
    },
    async deleteTodo({id}) {
        try {
            const todos = await Todo.findAll({
                where: {id}
            })
            todos[0].destroy()
            return true
        } catch (e) {
            throw new Error('Could not delete task')
        }
    }
}