export const POSTS_COLUMNS = (handleDelete, handleEdit) => [
    {
      key: 'id',
      title: 'Id',
      render:(data)=><>{data.id}</>
    },
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'cities',
      title: 'Cities',
    },
    {
      key: 'userId',
      title: 'Actions',
      render: (data) => (
        <div onClick={(e) => e.stopPropagation()}>
          <button onClick={() => handleDelete(data.id)}>delete</button>
          <button onClick={() => handleEdit(data.id)}>edit</button>
        </div>
      ),
    },
  ];