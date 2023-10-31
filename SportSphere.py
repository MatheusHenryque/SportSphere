from flask import Flask, render_template, request, redirect, url_for
import psycopg2 as pg

app = Flask(__name__)

# Configuração do banco de dados
conn = pg.connect(
    host="localhost",
    user="postgres",
    password="Ml304210?",
    port="5432",
    dbname="SportSphere.bd"  
)

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']
        telefone = request.form['telefone']

        cursor = conn.cursor()
        cursor.execute("INSERT INTO TB_USUARIO (nome, email, telefone) VALUES (%s, %s, %s)", (nome, email, telefone))
        conn.commit()
        cursor.close()

        return redirect(url_for('login'))  

    registration_form = """
    <form method="POST">
        <label for="nome">NOME:</label>
        <input type="text" name="nome" required>
        <label for="email">EMAIL:</label>
        <input type="text" name="email" required>
        <label for="telefone">TELEFONE:</label>
        <input type="int" name="telefone" required>
        <button type="submit">Register</button>
    </form>
    """

    return registration_form


@app.route('/login')
def login():
    # Implemente a lógica de login aqui
    return "Página de login"

if __name__ == '__main__':
    app.run(debug=True)
