import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

//api.github/users/orgs/rocketseat/repos

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/PLATEIRA/Github-Explorer'
}

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
               <RepositoryItem repository={repository} />
               <RepositoryItem repository={repository} />
               <RepositoryItem repository={repository} />
               <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}