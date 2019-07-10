
/*
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render() {
    var todoClass = this.props.item.done ?
    "done" : "undone";
    return (
      React.createElement("li", { className: "list-group-item " },
      React.createElement("div", { className: todoClass },
      React.createElement("span", { className: "glyphicon glyphicon-ok icon", "aria-hidden": "true", onClick: this.onClickDone }),
      this.props.item.value,
      React.createElement("button", { type: "button", className: "close", onClick: this.onClickClose }, "\xD7"))));
}}

export default TodoItem;
*/
