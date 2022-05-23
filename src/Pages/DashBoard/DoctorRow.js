// import React from 'react';
// import { toast } from 'react-toastify';

// const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
//     const { name, specialty, img, email } = doctor;


//     return (
//         <tr>
//             <th>{index + 1}</th>
//             <td><div class="avatar">
//                 <div class="w-16 rounded">
//                     <img src={img} alt="Tailwind-CSS-Avatar-component" />
//                 </div>
//             </div></td>
//             <td>{name}</td>
//             <td>{specialty}</td>
//             <td>
//                 <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
//                 {/* <button onClick={() => handleDelete(email)} class="btn btn-xs btn-error text-white">Delete</button> */}
//             </td>
//         </tr>
//     );
// };

// export default DoctorRow;
import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, img, email } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;