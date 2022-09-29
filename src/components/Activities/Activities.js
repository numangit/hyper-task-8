import Activity from '../Activity/Activity';
import './Activities.css';

const Activities = (props) => {

    const { activities, addToList } = props;

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 my-1 my-lg-3 mx-lg-5 mx-3 ">
            {
                activities.map(activity => <Activity key={activity.id} activity={activity} addToList={addToList}></Activity>)
            }
        </div>
    );
};

export default Activities;