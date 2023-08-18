"use client";
const TodoList = () => {
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
      </tr>
    </tbody>
  </table>
</div>
    )
}

export default TodoList