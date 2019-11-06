//rcc回车
//react里面通过ref来获取组件或者dom元素，要使用ref之前必须先调用react.ref方法来创建ref
import React, { Component, Fragment } from 'react'
import { TodoHeader, TodoInput, TodoList, Like } from './components/index'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      title: "待办事项列表",
      desc: "今日事，今日做",
      todos: [{
        id: 1,
        title: '吃饭',
        isCompleted: true
      }, {
        id: 2,
        title: '睡觉',
        isCompleted: false
      }]
    }


  }

  handleTodo = (title) => {
    console.log(title);
    this.setState({
      todos: this.state.todos.concat({
        id: Math.random(),
        title: title,
        isCompleted: false

      })
    })
  }
  render() {
    return (
      <>
        <TodoHeader>
        </TodoHeader>
        <TodoInput todo={this.handleTodo} />
        <TodoList todos={this.state.todos} />
        <Like />
      </>
    )
  }
}