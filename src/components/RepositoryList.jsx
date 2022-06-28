const repositoryName = 'unform';

export function RepositoryList(){
    return(
        <section className="repository-List">
            <h1>Lista de repositórios</h1>

            <ul>
                <li>
                    <strong>unform</strong>
                    <p>Forms is React</p>

                    <a href="">
                        Acessar repositório
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms is React</p>

                    <a href="">
                        Acessar repositório
                    </a>
                </li>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms is React</p>

                    <a href="">
                        Acessar repositório
                    </a>
                </li>
            </ul>
        </section>
    );
}