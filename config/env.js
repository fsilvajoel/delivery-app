const greenConsoleFont = '\x1b[32m';

function prettyLog(env) {
  console.log(
    `${greenConsoleFont}#------------------------------------------------------------#`
  );
  console.log(`          Application running using .env.${env}`);
  console.log('#------------------------------------------------------------#');
}

function envConfig() {
  let env = 'development';

  if (process.env.NODE_ENV === 'production' && process.env.STAGE === 'PROD') {
    env = 'production';
  } else if (process.env.STAGE === 'DEV') {
    env = 'local';
  }

  prettyLog(env);

  return env;
}

exports.envConfig = envConfig;
