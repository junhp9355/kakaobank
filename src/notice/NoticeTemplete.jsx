// import "../styles/TodoTemplate.scss"

function NoticeTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">📜 Todo List 📜</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default NoticeTemplate;
