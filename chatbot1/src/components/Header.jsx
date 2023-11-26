import React, { Component } from 'react';

// Header Component
class Header extends Component {
  render() {
    return (
      <div className='header' style={{ background: '#3498db', color: '#fff', padding: '10px' }}>
        <h1>My Chat App</h1>
      </div>
    );
  }
}

// Sidebar Component
class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar' style={{ background: '#ecf0f1', padding: '10px', width: '200px' }}>
        <h2>Contacts</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Contact 1</li>
          <li>Contact 2</li>
          <li>Contact 3</li>
          {/* Add more contacts as needed */}
        </ul>
      </div>
    );
  }
}

// Main Chat Area Component
class MainChatArea extends Component {
  render() {
    return (
      <div className='main-chat-area' style={{ flex: 1, padding: '10px', overflowY: 'scroll', border: '1px solid #ecf0f1' }}>
        <div className='message' style={{ marginBottom: '10px' }}>
          <div className='user-avatar' style={{ background: '#3498db', color: '#fff', padding: '5px', borderRadius: '50%', marginRight: '10px' }}>
            U1
          </div>
          <div className='message-content'>
            <p>Hello!</p>
            <span className='timestamp' style={{ fontSize: '12px', color: '#95a5a6' }}>10:00 AM</span>
          </div>
        </div>

        <div className='message' style={{ marginBottom: '10px' }}>
          <div className='user-avatar' style={{ background: '#3498db', color: '#fff', padding: '5px', borderRadius: '50%', marginRight: '10px' }}>
            U2
          </div>
          <div className='message-content'>
            <p>Hi there!</p>
            <span className='timestamp' style={{ fontSize: '12px', color: '#95a5a6' }}>10:05 AM</span>
          </div>
        </div>

        {/* Add more messages as needed */}
      </div>
    );
  }
}

// Input Field Component
class InputField extends Component {
  render() {
    return (
      <div className='input-field' style={{ display: 'flex', marginTop: '10px' }}>
        <input type='text' placeholder='Type your message...' style={{ flex: 1, padding: '5px' }} />
        <button style={{ background: '#3498db', color: '#fff', padding: '5px', marginLeft: '5px', cursor: 'pointer' }}>Send</button>
      </div>
    );
  }
}

// Main Chat Interface Component
class ChatInterface extends Component {
  render() {
    return (
      <div className='chat-interface' style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <div className='container' style={{ display: 'flex', flex: 1 }}>
          <Sidebar />
          <MainChatArea />
        </div>
        <InputField />
      </div>
    );
  }
}

export default ChatInterface;
