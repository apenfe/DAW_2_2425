<form action="<?=$_SERVER["PHP_SELF"]?>" method="post">
    <p>
      <label for="nombre">Nombre</label>
               <input type="text" name="nombre" value="">
            </p>
            <p>
               <label for="email">Email</label>
               <input type="email" name="email" value="">
            </p>
            <p>
                <label for="clave1">Clave</label>
                <input type="password" name="clave[original]">
            </p>
            <p>
                <label for="clave2">Repetir Clave</label>
                <input type="password" name="clave[repetida]">
            </p>
            <p>
            <label for="intereses">Intereses</label>
            <select name="intereses[]" multiple>
                <option value="nadar">Nadar</option>
                <option value="correr">Correr</option>
                <option value="reir">Reir</option>
                <option value="llorar">Llorar</option>
            </select>
        </p>
            <p>
                <label>
                    <input type="submit" value="Enviar" name="registrarse">
                    <input type="submit" value="Cancelar" name="registrarse">
                </label>
            </p>
        </form>