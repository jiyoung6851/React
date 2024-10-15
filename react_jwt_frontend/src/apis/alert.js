import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// 기본 alert
export const alert=(title, text, icon, callback)=>{
    MySwal.fire({
        title: title,
        text: text,
        icon: icon
    })
    .then(callback);
}