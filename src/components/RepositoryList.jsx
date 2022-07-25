import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

//api.github/users/orgs/rocketseat/repos

export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('api.github/users/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);


    return(
        <section className="repository-List">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                     return <RepositoryItem key={repository.name} repository={repository} />
                })}
            
            </ul>
        </section>
    );
}