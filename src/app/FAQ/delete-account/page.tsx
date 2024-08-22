import { Navbar } from "@/components/sections/navbar/navbar.section";

export default function DeleteAccount() {
  return (
    <>
      <Navbar hiden={false} dataTargetValue={""} />
      <main className="container">
        <div className="row">
          <div className="col s12">
            <div className="card white">
              <div className="card-content ">
                <div className="mb-5">
                  <span className="card-title mb-4">Borrar cuenta</span>
                </div>
                <div className="text-lg mb-4">
                  En Cleani nos tomamos en serio tus datos personales, por ello ponemos a tu disposición esta guía rápida para que puedas borrar tu cuenta y tus datos personales. Los datos recabados por Cleani son usados para brindar la mejor experiencia posible a nuestros usuarios, pero puede ocurrir que éste quiera borrar su cuenta, por lo que también se borran los datos personales.
                </div>
                <div className="text-lg mb-4">
                  Para borrar la cuenta de Cleani, se tiene que ir a la sección de Perfil, el botón inferior a la derecha. Posteriormente, se debe de presionar el botón rojo llamado “Borrar cuenta”. Finalmente, nuestro equipo de Atención al Cliente se pondrá en contacto contigo para averiguar la razón por la cual quieres borrar tu cuenta, y de esta forma, se procederá con tu solicitud.
                </div>
                <div className="text-lg mb-4">
                  ¡Y listo! Así habrás completado el proceso de eliminación de tu cuenta de Cleani.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
