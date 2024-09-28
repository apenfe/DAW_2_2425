<form action="<?= $_SERVER['PHP_SELF'] ?>" method="POST">
	<p>
		<label for="nombre">Nombre</label>
		<input type="text" name="nombre" 
			<?php mostrar_campo("nombre") ?>
		>
		<?php mostrar_error_campo("nombre", $errores) ?>
	</p>
	<p>
		<label for="email">Email</label>
		<input type="email" name="email"
			<?php mostrar_campo("email") ?>
		>
		<?php mostrar_error_campo("email", $errores) ?>
	</p>
	<p>
		<label for="clave1">Clave</label>
		<input type="password" name="clave1">
		<?php mostrar_error_campo("clave1", $errores) ?>
	</p>
	<p>
		<label for="clave2">Repetir Clave</label>
		<input type="password" name="clave2">
	</p>
	<p>
		<label>
			<input type="submit" value="Enviar">
		</label>
	</p>
</form>