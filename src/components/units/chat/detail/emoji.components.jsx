import React, { useState } from 'react';
import EmojiInput from 'react-input-emoji';
import { deflate } from 'zlib';

export default function EmojiInputExample() {
    const [message, setMessage] = useState('');

    const handleOnEnter = (char) => {
        // Enter를 눌렀을 때 메시지를 출력
        console.log(`Message sent: ${message}`);
        setMessage(''); // 입력 필드 초기화
    };

    return (
        <div>
            <EmojiInput
                value={message}
                onChange={setMessage} // 메시지 상태 업데이트
                onEnter={handleOnEnter} // Enter 이벤트 핸들러
                placeholder="메시지를 입력하세요..." // 플레이스홀더 텍스트
            />
        </div>
    );
};
