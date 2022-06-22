// ReactDOM.render(<h1>Hello, Everyone!</h1>, document.getElementById('root'));
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <div>
        <h1>Hello, Everyone!</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>,
    document.getElementById('root')
);
