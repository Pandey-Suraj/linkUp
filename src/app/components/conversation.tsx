import React from 'react';

export function Conversation() {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const message = inputRef.current?.value.trim();
        if (message) {
            console.log("Message to send:", message);
            // Handle your message sending logic here
            if (inputRef.current) {
                inputRef.current.value = ''; // Clear input after sending
            }
        }
    }

    let conversation = [
        {
            name: "Suraj Pandey",
            message: "Hey John! How's your morning going?",
            time: "09:00",
            date: "2024-01-10"
        },
        {
            name: "John Smith", 
            message: "Morning Suraj! It's going well, just got my coffee. How about you?",
            time: "09:01",
            date: "2024-01-10"
        },
        {
            name: "Suraj Pandey",
            message: "Pretty good! Making progress on the new feature implementation.",
            time: "09:02", 
            date: "2024-01-11"
        },
        {
            name: "John Smith",
            message: "That's great to hear! Which part are you working on?",
            time: "09:03",
            date: "2024-01-11"
        },
        {
            name: "Suraj Pandey",
            message: "The user authentication module. Just finished the login flow.",
            time: "09:04",
            date: "2024-01-12"
        },
        {
            name: "John Smith",
            message: "Nice! Did you implement 2FA as well?",
            time: "09:05",
            date: "2024-01-12"
        },
        {
            name: "Suraj Pandey",
            message: "Yes, both SMS and email verification are working now.",
            time: "09:06",
            date: "2024-01-13"
        },
        {
            name: "John Smith",
            message: "Perfect! That was one of our key requirements.",
            time: "09:07",
            date: "2024-01-13"
        },
        {
            name: "Suraj Pandey",
            message: "Exactly. How's the frontend coming along?",
            time: "09:08",
            date: "2024-01-13"
        },
        {
            name: "John Smith",
            message: "Making good progress. The dashboard is almost complete.",
            time: "09:09",
            date: "2024-01-13"
        },
        {
            name: "Suraj Pandey",
            message: "Can't wait to see it! Are you using the new component library?",
            time: "09:10",
            date: "2024-01-14"
        },
        {
            name: "John Smith",
            message: "Yes, it's making development much faster!",
            time: "09:11",
            date: "2024-01-14"
        },
        {
            name: "Suraj Pandey",
            message: "That's great! We should sync up later to integrate our parts.",
            time: "09:12",
            date: "2024-01-14"
        },
        {
            name: "John Smith",
            message: "Definitely. How about after lunch?",
            time: "09:13",
            date: "2024-01-14"
        },
        {
            name: "Suraj Pandey",
            message: "Works for me. 2 PM?",
            time: "09:14",
            date: "2024-01-14"
        },
        {
            name: "John Smith",
            message: "Perfect timing. I'll set up the meeting.",
            time: "09:15",
            date: "2024-01-14"
        },
        {
            name: "Suraj Pandey",
            message: "Great! By the way, did you see the new API documentation?",
            time: "09:16",
            date: "2024-01-14"
        },
        {
            name: "John Smith",
            message: "Not yet, is it updated with the latest endpoints?",
            time: "09:17",
            date: "2024-01-14"
        },
        {
            name: "Suraj Pandey",
            message: "Yes, all the new auth endpoints are documented now.",
            time: "09:18",
            date: "2024-01-14"
        },
        {
            name: "John Smith",
            message: "Awesome, I'll check it out before our meeting.",
            time: "09:19",
            date: "2024-01-14"
        },
        {
            name: "Suraj Pandey",
            message: "Perfect! I also added some example requests.",
            time: "09:20",
            date: "2024-01-14"
        },
        {
            name: "John Smith",
            message: "That'll be super helpful for the integration!",
            time: "09:21",
            date: "2024-01-14"
        },
        {
            name: "Suraj Pandey",
            message: "Exactly what I thought. Need anything else from my end?",
            time: "09:22",
            date: "2024-01-14"
        },
        {
            name: "John Smith",
            message: "I think we're good for now. See you at 2!",
            time: "09:23",
            date: "2024-01-14"
        },
        {
            name: "Suraj Pandey",
            message: "Looking forward to it! Let me know if you need anything before then.",
            time: "09:24",
            date: "2024-01-14"
        },
        {
            name: "John Smith",
            message: "Will do! Thanks Suraj.",
            time: "09:25",
            date: "2024-01-14"
        },
        {
            name: "Suraj Pandey",
            message: "No problem! Back to coding now 💻",
            time: "09:26",
            date: "2024-01-14"
        },
        {
            name: "John Smith",
            message: "Same here! 🚀",
            time: "09:27",
            date: "2024-01-14"
        },
        {
            name: "Suraj Pandey",
            message: "Quick update - just pushed some new changes to the repo.",
            time: "10:30",
            date: "2024-01-15"
        },
        {
            name: "John Smith",
            message: "Thanks for the heads up! I'll pull the latest changes.",
            time: "10:31",
            date: "2024-01-15"
        },
        {
            name: "Suraj Pandey",
            message: "Added some unit tests too. Could you review them?",
            time: "10:32",
            date: "2024-01-15"
        },
        {
            name: "John Smith",
            message: "Of course! I'll review them right after my current task.",
            time: "10:33",
            date: "2024-01-15"
        },
        {
            name: "Suraj Pandey",
            message: "Thanks! The PR number is #123.",
            time: "10:34",
            date: "2024-01-15"
        },
        {
            name: "John Smith",
            message: "Got it! I'll check it out.",
            time: "10:35",
            date: "2024-01-15"
        },
        {
            name: "Suraj Pandey",
            message: "Perfect! See you at the meeting then!",
            time: "10:36",
            date: "2024-01-15"
        },
        {
            name: "John Smith",
            message: "Yes, looking forward to it!",
            time: "10:37",
            date: "2024-01-15"
        },
        {
            name: "Suraj Pandey",
            message: "Don't forget to bring the sprint planning notes!",
            time: "10:38",
            date: "2024-01-15"
        },
        {
            name: "John Smith",
            message: "Already got them ready! 👍",
            time: "10:39",
            date: "2024-01-15"
        },
        {
            name: "Suraj Pandey",
            message: "Always prepared! That's why I love working with you! 😄",
            time: "10:40",
            date: "2024-01-15"
        },
        {
            name: "John Smith",
            message: "Right back at you! We make a great team! 🤝",
            time: "10:41",
            date: "2024-01-15"
        }
    ]
    return (
        <>
        <div className="h-[77vh] overflow-y-auto">
            {conversation.map((item, index) => {
                const isCurrentUser = item.name === "Suraj Pandey";
                const messageDate = new Date(item.date + ' ' + item.time);
                const now = new Date();
                const timeDiff = now.getTime() - messageDate.getTime();
                const isToday = messageDate.toDateString() === now.toDateString();
                const isYesterday = messageDate.toDateString() === new Date(now.getTime() - 86400000).toDateString();
                
                const timeDisplay = item.time;
                
                // Show date divider if first message or date changes from previous message
                const showDateDivider = index === 0 || 
                    new Date(conversation[index-1].date).toDateString() !== messageDate.toDateString();
                
                let dateDisplay = '';
                if (isToday) {
                    dateDisplay = 'Today';
                } else if (isYesterday) {
                    dateDisplay = 'Yesterday';
                } else {
                    dateDisplay = messageDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                }

                return (
                    <React.Fragment key={`${item.date}-${item.time}-${item.name}`}>
                        {showDateDivider && (
                            <div className="flex justify-center my-4">
                                <span className="bg-gray-100 text-gray-500 text-sm px-3 py-1 rounded-full">
                                    {dateDisplay}
                                </span>
                            </div>
                        )}
                        <div className={`flex items-center p-2 ${isCurrentUser ? 'justify-end pr-5' : 'pl-5'}`}>
                            {!isCurrentUser && (
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                        {item.name.charAt(0)}
                                    </div>
                                </div>
                            )}
                            <div className={`flex flex-col ${isCurrentUser ? 'items-end' : ''}`}>
                                {isCurrentUser && <p className={`text-sm text-gray-500 ${isCurrentUser ? 'mr-2' : 'ml-2'}`}>{timeDisplay}</p>}
                                {!isCurrentUser && <h1 className={`flex text-sm ${isCurrentUser ? 'mr-2' : 'ml-2'}`}>{item.name} {!isCurrentUser && <p className={`text-sm text-gray-500 ${isCurrentUser ? 'mr-2' : 'ml-2'}`}>{timeDisplay}</p>}</h1>}
                                <p className={`text-sm text-gray-500 ${isCurrentUser ? 'mr-2' : 'ml-2'}`}>{item.message}</p>
                            </div>
                        </div>
                    </React.Fragment>
                );
            })}
            </div>
            <div className="border-1 border-gray-200  p-4 mx-3 mt-1 rounded-lg">
                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded">
                        <i className="pi pi-plus text-gray-600"></i>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded">
                        <i className="pi pi-image text-gray-600"></i>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded">
                        <i className="pi pi-link text-gray-600"></i>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded">
                        <i className="pi pi-paperclip text-gray-600"></i>
                    </button>
                    <form className="flex-1 flex gap-2" onSubmit={handleSubmit}>
                        <input 
                            ref={inputRef}
                            type="text"
                            placeholder="Write Message"
                            className="flex-1 p-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-300"
                            autoFocus
                        />
                        <button type="submit" className="p-2 hover:bg-gray-100 rounded">
                            <i className="pi pi-send text-gray-600"></i>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}