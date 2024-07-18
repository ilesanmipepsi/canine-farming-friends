const friendListElement = document.getElementById('friend-list');

// Replace with your logic to retrieve invited friends from storage
const invitedFriends = ['Friend 1', 'Friend 2', 'Friend 3'];

function displayFriends(friends) {
  friends.forEach(friend => {
    const friendListItem = document.createElement('li');
    friendListItem.textContent = friend;
    friendListElement.appendChild(friendListItem);
  });
}

displayFriends(invitedFriends);

// Logic to retrieve the referral link (replace with your server-side functionality)
const referralLink = 'https://your-app.com/join?ref=USER_ID'; // Replace with actual link generation

const referralLinkElement = document.getElementById('referral-link');
referralLinkElement.href = referralLink;