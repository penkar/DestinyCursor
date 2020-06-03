import * as React from "react";
import Term from "./Term"
import Button from "./Button"

import styles from "./Body.module.scss";

export default function Body ({ change }) {
  return (
    <div className={styles.body}>
      <h1>Lorem Ipsum</h1>
      <h2>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h2>
      <h2>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h2>
      <p>
        <Term term="Lorem" change={change} color="green"/> ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus nisi nec finibus tristique. <Term term="Nunc" change={change} color="green"/> feugiat id enim at sollicitudin. Curabitur lacus velit, vehicula faucibus consequat ut, imperdiet commodo urna. Nunc molestie metus at pulvinar convallis. Fusce auctor non arcu quis eleifend. <Term term="Integer" change={change} color="red"/> fringilla, mauris dictum consequat facilisis, nulla elit sollicitudin risus, vitae aliquam orci lorem nec elit. <Term term="Praesent" change={change} color="red"/> tincidunt sapien in tristique porta. Morbi in metus molestie, tincidunt lorem quis, vulputate nulla. Suspendisse blandit diam quam, vitae iaculis metus iaculis vitae. Suspendisse lorem nulla, eleifend in ipsum non, convallis rutrum metus. Quisque lacinia hendrerit sapien, a accumsan quam varius non. Proin metus tortor, <Term term="sagittis" change={change} color="green"/> sit amet mi vel, tempus volutpat tortor. Quisque ut feugiat odio, et luctus nisi. Nam pulvinar felis ut quam fringilla cursus eget ut tellus. <Term term="Proin honcus" change={change} color="red"/>, a bibendum dui mattis ut. Integer id quam urna.
      </p>
      <p>
        Sed dapibus est mi, nec ornare enim facilisis ut. Donec convallis leo ac mauris sagittis aliquam. In tellus massa, condimentum quis dolor a, congue condimentum libero. Nulla facilisi. Aliquam commodo massa laoreet, iaculis orci a, tempus magna. Nam quis massa vitae orci tempus vestibulum nec a sapien. <Term term="Mauris" change={change} color="green"/> vel orci imperdiet, dapibus magna sed, commodo leo. Aliquam erat volutpat. Ut vulputate consequat finibus.
      </p>
      <p>
        <Term term="Suspendisse" change={change} color="red"/> potenti. Proin malesuada sagittis rutrum. Fusce hendrerit sapien tellus, quis mollis mauris egestas nec.  efficitur pulvinar justo, eget tristique tellus condimentum in. <Term term="Nulla" change={change} color="green"/> pellentesque egestas nisi sit amet ultrices. Suspendisse rhoncus sagittis eros, sit amet faucibus risus tempus et. Nullam vestibulum augue neque, sed scelerisque elit porttitor in. Sed porta lobortis metus nec euismod. Donec vehicula urna eget interdum egestas. Suspendisse iaculis tortor sit amet finibus ullamcorper. Mauris consectetur nunc non nibh vehicula sagittis. In hac habitasse platea dictumst.
      </p>
      <p>
        Donec euismod tortor eget justo ultricies interdum. Duis tempor aliquet felis, id ornare arcu malesuada non. Morbi non congue diam, non suscipit lacus. <Term term="Nam liquam" change={change} color="red"/> sed purus sed blandit. Donec suscipit pellentesque tortor. Aliquam eu sodales velit. Quisque fermentum scelerisque dolor. Praesent cursus neque velit, in molestie diam commodo ac. Donec iaculis ex vitae fermentum finibus. <Term term="Proin apibus" change={change} color="green"/>. Cras blandit facilisis mi, gravida tincidunt ante consectetur sit amet. Pellentesque lacus dui, eleifend in porttitor sed, posuere in urna. In at augue lacinia felis mollis ullamcorper at vitae enim. Suspendisse at odio vel ligula tincidunt varius.
      </p>
      <p>
        <Term term="Phasellus" change={change} color="red"/> vel risus tortor. Donec suscipit, nibh ac varius faucibus, dui elit suscipit felis, et mattis ante velit sit amet ligula. <Term term="Praesent" change={change} color="green"/> sed tristique erat, mattis varius nunc. Aliquam ut purus gravida, pellentesque neque sit amet, ullamcorper ante. Nam rutrum elit at sem euismod condimentum. In <Term term="venenatis" change={change} color="red"/> felis arcu. Quisque lacinia euismod mattis. Ut at accumsan urna, vel molestie risus. Sed euismod odio quis volutpat finibus. Suspendisse diam lacus, semper non dapibus et, luctus quis velit. Pellentesque ac semper ex. Ut rutrum dictum finibus. Sed ultrices nisl nec nulla sagittis vestibulum. In vulputate ex vitae ex fermentum sagittis sed ultricies elit. Donec dictum volutpat ullamcorper.
      </p>
      <p>
        Duis lectus sapien, tincidunt id sollicitudin vitae, convallis eu magna. In eget metus commodo nulla semper semper eu at augue. <Term term="Vestibulum" change={change} color="red"/> ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In dignissim tempus tellus faucibus commodo. Vestibulum dignissim at risus at venenatis. Nam metus odio, tristique in pharetra gravida, commodo eu lectus. <Term term="Quisque" change={change} color="red"/> porta tellus nec mauris vehicula malesuada. Sed a tincidunt odio, non euismod elit. Vestibulum tempus lectus vel dui maximus facilisis. Mauris eget augue magna. Suspendisse condimentum nisl et bibendum aliquet. Suspendisse potenti. Donec congue, mi at commodo aliquet, nibh mauris consectetur neque, sit amet facilisis augue lacus eget quam. Aliquam sagittis orci sit amet mi fringilla pharetra quis at mi. Integer aliquet arcu et placerat placerat.
      </p>
      <p>
        <Term term="Vivamus" change={change} color="green"/> dapibus lectus quis ligula euismod, eu ultricies lectus fringilla. Fusce posuere ante lacus, id commodo odio eleifend eu. Nam bibendum ante ut rutrum ultricies. Fusce quis leo nulla. Maecenas at metus eu sapien feugiat pharetra. Suspendisse non iaculis purus. Aliquam feugiat quis neque nec pellentesque. Nulla congue, ligula at iaculis malesuada, nunc sapien placerat purus, at ultrices ipsum massa ac purus. <Term term="Mauris" change={change} color="green"/> sit amet turpis eget magna ornare consequat.
      </p>
      <p>
        Aliquam erat volutpat. <Term term="Curabitur" change={change} color="red"/> mattis lobortis nisi. Quisque convallis erat ex, varius aliquet quam cursus non. Sed suscipit pharetra bibendum. Phasellus dui odio, placerat eget cursus ut, <Term term="fermentum" change={change} color="green"/> id leo. In eget augue velit. Proin libero purus, feugiat in lectus tempor, varius posuere sem. <Term term="Quisque" change={change} color="red"/> dapibus nulla ut tortor faucibus pretium. Integer id accumsan dolor. Aenean id consectetur est. Etiam nec leo nisi. Nam sem tellus, laoreet vel odio in, dignissim ultricies nibh. <Term term="Suspendisse" change={change} color="red"/> dignissim orci magna, nec condimentum dui commodo id. Aenean fermentum pellentesque facilisis. Nulla facilisi.
      </p>
      <p>
        Pellentesque convallis accumsan leo non interdum. Fusce convallis ut elit nec scelerisque. <Term term="Maecenas" change={change} color="green"/> scelerisque tempor convallis. Fusce vehicula orci est, nec luctus risus vehicula non. Proin purus ipsum, ullamcorper et fermentum ac, placerat sed tortor. <Term term="Phasellus" change={change} color="green"/> at ex nisi. Suspendisse quis dignissim elit, nec vestibulum mauris. Donec tristique tempus dolor id suscipit. Ut venenatis erat massa, feugiat lacinia purus pharetra id. Nam feugiat ornare pharetra. Nullam lacinia leo ut ligula ullamcorper molestie. Proin egestas mattis lectus vitae mollis. Vestibulum nec porttitor ex.
      </p>
      <hr />
      <div>
        <Button title="Vitae" />
        <Button title="Fusce" />
        <Button title="Justo" />
        <Button title="Ispum" />
        <Button title="Donec" />
      </div>
    </div>
  );
}
