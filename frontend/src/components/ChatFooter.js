import Status from './Status';

function ChatFooter() {
  return (
    <footer className="columns">
      <div className="column is-hidden-mobile has-text-left">
      </div>
      <div className="column has-text-right-tablet has-text-centered">
        <Status />
      </div>
    </footer>
  );
}

export default ChatFooter;
