async function deleteComment(id) {
    try{
        const response = await fetch(`/api/comments/${id}`, { method: 'DELETE' });
        if(!response.ok) throw new Error("Posts data request failed");                
        console.log('Comment deleted');
    }
    catch(error){
        console.log('Failed to delete:', error);
    }
//   return fetch(`/api/comments/${id}`, { method: 'DELETE' })
//     .then(() => console.log('Comment deleted'))
//     .catch(error => console.error('Failed to delete:', error));
}