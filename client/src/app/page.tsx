

export default function Home() {
  return (
    <main className="content">
      <div className="content__container">
        <div className="content__title">
          <h1 className="">The Black Book of Tasks</h1>
        </div>
        <div className="content__tasks">
          <button className="tasks__button__create">
            Create task
          </button>
          <div className="tasks__daily">
            // Tasks Daily
          </div>
          <div className="tasks__active">
            // Tasks Active
          </div>
          <div className="tasks__failed">
            // Tasks Failed
          </div>
        </div>
      </div>
    </main>
  );
}