import styles from './SignUp.module.css'

function SignUp(){
    return(
        <>
            <div class="container">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-5 d-none d-lg-block">
                                <img src="../img/foto_pg_formularioagri.png" alt="Plantação"/>
                            </div>
                            <div class="col-lg-7">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Criar uma conta</h1>
                                    </div>
                                    <form class="user" method="POST" action="cadastro.php">
                                        <div class="form-group row">
                                            {/* NOME */}
                                            <div class="col-sm-4 mb-0 mb-sm-0">
                                                <input type="text" class="form-control form-control-user"
                                                    placeholder="Nome" name="Nome" required/>
                                            </div>
                                            {/* TELEFONE */}
                                            <div class="col-sm-4">
                                                <input type="text" class="form-control form-control-user" 
                                                    placeholder="Telefone" name="Telefone" required/>
                                            </div>
                                            {/* CPF */}
                                            <div class="col-sm-4 mb-0 mb-sm-0">
                                                <input type="text" class="form-control form-control-user" 
                                                    placeholder="CPF" name="CPF" required/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            {/* EMAIL */}
                                            <input type="email" class="form-control form-control-user" 
                                                placeholder="Email" name="Email" required/>
                                        </div>
                                        {/* SENHA */}
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                    placeholder="Senha" name="Senha"required/>
                                        </div>
                                        <input type="submit" value="Registrar" class="btn btn-success btn-user btn-block"/>
                                    </form>
                                    <hr/>

                                    <div class="text-center">
                                        <a class="small" href="../login.php">Já possui uma conta? Login!</a> &nbsp;&nbsp;&nbsp;&nbsp; <a class="small" href="../paginainicial/index.php">Página inicial</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp